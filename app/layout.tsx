import '@/styles/globals.css'
import SideBar from '../components/SideBar'
import Login from '../components/Login'
import { SessionProvider } from '../components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import ClientProvider from 'components/ClientProvider'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body className='bg-main-rainbowbg bg-cover bg-no-repeat'>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
          <div className="flex">
            {/* Sidebar */}
            <div className="bg-lightMode-primary/70 md:w-[16rem] w-[8rem] h-screen">
              <SideBar />
            </div>

            {/* Client Provider - Notification */}
            <ClientProvider />


            <div className="bg-primary flex-1">{children}</div>
          </div>            
          )}

        </SessionProvider>
      </body>
    </html>
  )
}
