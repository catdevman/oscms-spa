import React from 'react';

export default function withSearch(WrappedComponent) {
  class HOC extends React.Component {
      render() {
        const params = new URLSearchParams(this.props.location.search);
        const search = params.get('search');
        return <WrappedComponent
        {...this.props}
        search={search}
        />;
      }
    }

    return HOC;
};
