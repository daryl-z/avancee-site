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
          fontSize: 14,
          overflow: 'auto',
          textAlign: 'center',
          background:
            'linear-gradient(to top right, rgba(255, 82, 99, 0.9) 10%, rgba(255, 115, 129, 0.9) 65%, rgba(252, 189, 1, 0.9) 125%)',
          minHeight: '100vh',
          selectors: {
            '.ms-Button': {
              margin: '10px 0'
            },
            '.ms-TextField-fieldGroup:hover': {
              border: '1px solid #d5dce0'
            },
            '.ms-TextField-fieldGroup': {
              border: '1px solid #d5dce0'
            },
            '.ms-TextField-fieldGroup input:focus': {
              borderColor: '#b7bfc6',
              boxShadow: 'inset 0px 1px 1px 0px #edf1f2'
            },
            '.ms-Label': {
              color: '#848f99',
              fontSize: 12,
              fontWeight: 500,
              display: 'block',
              marginBottom: 7
            },
            '.btnWrapper': {
              marginTop: 30,
              textAlign: 'right'
            },
            '.formItem': {
              marginTop: 30,
              textAlign: 'left'
            }
          }
        }
      ]
    };
  }
);
