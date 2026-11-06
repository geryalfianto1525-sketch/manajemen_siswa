import { redirect } from 'next/navigation';

export default function Home() {
  // mengarahkan pengunjung ke halaman login saat web dibuka
  redirect('/auth/login');
}