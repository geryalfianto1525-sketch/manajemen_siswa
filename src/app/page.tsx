import { redirect } from 'next/navigation';

export default function Home() {
  // Otomatis mengarahkan pengunjung ke halaman login saat web dibuka
  redirect('/auth/login');
}