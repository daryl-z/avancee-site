import * as React from 'react';
import { lazy } from 'react';
import routeList from '../configs/routeList';

interface IProps {
  componentName: string;
}

const AsyncCompo = (props: IProps) => {
  const { componentName } = props;

  const Component = Components[componentName];

  return <Component {...props} />;
};

export default AsyncCompo;
