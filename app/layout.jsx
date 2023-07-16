import "@styles/global.css";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptobia",
  description: "Discover the best prompts for your writing.",
};

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
