import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'Login',
  };
export default function LoginPage() {
  return (
    
    <main className="flex items-center  bg-black justify-center md:h-screen">
       
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
      <p className='text-center text-white'>Demo purposes only <br /> username admin@admin.com <br /> password Vx35SZYH55zH  </p>
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-400 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}