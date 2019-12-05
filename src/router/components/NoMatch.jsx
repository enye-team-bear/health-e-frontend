import React from 'react';
import { Route } from 'react-router-dom';
import { NotFound } from '../../components/notFound';

const NoMatch = () => <Route path="*" exact component={NotFound} />;

export default NoMatch;
