import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/spinner';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      pubic_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success'></i>
        ) : (
          <i className='fas fa-times-circle text-danger'></i>
        )}
      </Fragment>
    );
  }
}

export default User;
