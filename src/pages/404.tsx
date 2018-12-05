import * as React from 'react'
import Layout from '../components/Layout'

interface IProps {
  location: Location
}

class NotFoundPage extends React.PureComponent<IProps> {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}
// tslint:disable-next-line:export-name
export default NotFoundPage
