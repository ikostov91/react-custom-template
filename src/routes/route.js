import React from "react"
import PropTypes from 'prop-types'
import { Route, Redirect } from "react-router-dom"

const AppRoute = ({
  component: Component,
  layout: Layout,
  isPrivate = true,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isPrivate && !localStorage.getItem("authUser")) {
        return (
          <Redirect
            to={{ pathname: LOGIN_ROUTE, state: { from: props.location } }}
          />
        )
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

AppRoute.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any
}

export default AppRoute
