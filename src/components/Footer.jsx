import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">ናትና ጥልፊ</h3>
            <p className="text-sm">123 Street, መቀለ , ትግራይ</p>
            <a href="mailto:natnatraditionals@gmail.com" className="text-sm">natnatraditionals@gmail.com</a>
          </div>
          <div className="flex items-center">
            <p className="mr-4">Follow us:</p>
            <a href="#" className="mr-2 text-white hover:text-gray-300">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#" className="mr-2 text-white hover:text-gray-300">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#" className="mr-2 text-white hover:text-gray-300">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="text-sm text-center">© 2024 ናትና ጥልፊ All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
