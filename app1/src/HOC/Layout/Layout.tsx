import * as React from 'react';

interface ILayoutProps {
}

const Layout: React.FunctionComponent<ILayoutProps> = ({children}) => {
  return <div>
    <div >
      <ul>
        <li><a href='/about'>About</a></li>
        <li><a href='/contact'>Contact US</a></li>
        <li><a href='/stream'>Stream</a></li>
      </ul>
    </div>
    <div>{children}</div>
  </div>;
};

export default Layout;
