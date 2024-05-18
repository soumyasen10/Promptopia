import '@styles/global.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata={
    title:"Promptopia",
    "description":"Discover & share AI prompts"
}

function RootLayout({children}) {
  return (
    <html>
        <body>
            <Provider>
            <div className="main">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;