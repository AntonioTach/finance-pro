import { logout } from '@/lib/actions/user.actions';
import { deviceType } from '@/lib/utils';
import { FooterProps } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Footer = ({ user, type = deviceType.DESKTOP }: FooterProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    const loggedOut = await logout();

    if (loggedOut) router.push('/sign-in');
  };
  return (
    <footer className="footer">
      <div
        className={
          type === deviceType.MOBILE ? 'footer_name_mobile' : 'footer_name'
        }
      >
        <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
      </div>

      <div
        className={
          type === deviceType.MOBILE ? 'footer_email_mobile' : 'footer_email'
        }
      >
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogout}>
        <Image src="icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  );
};

export default Footer;
