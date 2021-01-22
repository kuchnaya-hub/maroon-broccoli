import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {withPrefix} from '../utils';
import '../sass/main.scss';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    render() {
        let title = _.get(this.props, 'pageContext.frontmatter.title', null) + ' | ' + _.get(this.props, 'pageContext.site.siteMetadata.title', null);
        if (_.get(this.props, 'pageContext.frontmatter.meta_title', null)) {
             title = _.get(this.props, 'pageContext.frontmatter.meta_title', null);
        }
        return (
            <React.Fragment>
                <Helmet>
                    <title>{title}</title>
                    <link rel="icon" type="image/png"  href="https://behtarads.com/images/purple-europa.png" />
                    <meta charSet="utf-8"/>        
                    <style type='text/css'>img#wpstats{display:none}</style>		<meta property="fb:app_id" content="187288694643718" />
		<meta property="fb:pages" content="8062627951" />
		<meta property="fb:admins" content="8803025,726995222,1550970059,1661021707,1178144075,643979435,4700188" />
		<meta property="og:site_name" content="TechCrunch" />
		<meta property="og:site" content="social.techcrunch.com" />
		<meta property="og:title" content="TechCrunch &#8211; Startup and Technology News" />
		<meta property="og:description" content="TechCrunch - Reporting on the business of technology, startups, venture capital funding, and Silicon Valley" />
		<meta property="og:image" content="https://techcrunch.com/wp-content/themes/techcrunch-2017/images/opengraph-default.png" />
		<meta property="og:url" content="https://social.techcrunch.com/" />
		<meta property="og:type" content="website" />       
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    <meta name="description" content={_.get(this.props, 'pageContext.frontmatter.meta_description', null)}/>
                    {_.get(this.props, 'pageContext.frontmatter.canonical_url', null) ? (
                    <link rel="canonical" href={_.get(this.props, 'pageContext.frontmatter.canonical_url', null)}/>
                    ) : (_.get(this.props, 'pageContext.site.siteMetadata.domain', null) && ((() => {
                        let domain = _.trim(_.get(this.props, 'pageContext.site.siteMetadata.domain', null), '/');
                        let page_url = withPrefix(_.get(this.props, 'pageContext.url', null));
                        return (
                        	<link rel="canonical" href={domain + page_url}/>
                        );
                    })()))}
                    {_.get(this.props, 'pageContext.frontmatter.no_index', null) && (
                    <meta name="robots" content="noindex,follow" />
                    )}
                    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,700i" rel="stylesheet"/>
                </Helmet>
                <div id="page" className={'site palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette', null)}>
                  <Header {...this.props} />
                  <main id="content" className="site-content">
                    {this.props.children}
                  </main>
                  <Footer {...this.props} />
                </div>
            </React.Fragment>
        );
    }
}
