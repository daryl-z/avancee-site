import { IStyle } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export type ILoginProps = {};

export interface ILoginStyles {
  login?: IStyle;
}

export const getStyles = memoizeFunction(
  (): ILoginStyles => {
    return {
      login: [
        {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background:
            'linear-gradient(to top right, rgba(255, 82, 99, 0.9) 10%, rgba(255, 115, 129, 0.9) 65%, rgba(252, 189, 1, 0.9) 125%)',
          minHeight: '100vh',
          selectors: {
            '.ms-Button': {
              margin: '10px 0'
            }
          }
        }
      ]
    };
  }
);
