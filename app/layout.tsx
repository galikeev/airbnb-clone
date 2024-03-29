import React from 'react';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from '@/app/components/modals/LoginModal';
import RentModal from '@/app/components/modals/RentModal';
import getCurrentUser from '@/app/actions/getCurrentUser';
import './globals.css';

const inter = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();
	return (
		<html lang="en">
			<body className={inter.className}>
				<ClientOnly>
					<ToasterProvider />
					<RentModal />
					<LoginModal />
					<RegisterModal />
					<Navbar currentUser={currentUser} />
				</ClientOnly>
				<div className="pb-20 pt-28">{children}</div>
			</body>
		</html>
	);
}
