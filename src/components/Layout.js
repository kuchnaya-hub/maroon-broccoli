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
                    <meta name="BehtarAds:title" content="Marketing App for Resellers">
                    <meta name="BehtarAds:description" content=" Get promo videos and creatives for your reselling product instantly. Use your favorite reselling app like Meesho, Shop101 and GlowRoad.">
                    <meta name="BehtarAds:image" content=" https://behtarads.com/images/screenshare_img.jpg">
                    <meta name="BehtarAds:card" content="summary_large_image">
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
