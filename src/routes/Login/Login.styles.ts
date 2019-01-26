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
