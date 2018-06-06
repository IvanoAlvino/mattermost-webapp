// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedHTMLMessage, injectIntl, intlShape} from 'react-intl';
import PropTypes from 'prop-types';
import marked from 'marked';

class FormattedMarkdownMessage extends React.PureComponent {
    static get propTypes() {
        return {
            intl: intlShape.isRequired,
            id: PropTypes.string.isRequired,
            defaultMessage: PropTypes.string.isRequired,
            values: PropTypes.object,
        };
    }

    render() {
        const origMsg = this.props.intl.formatMessage({
            id: this.props.id,
            defaultMessage: this.props.defaultMessage,
            values: this.props.values,
        });

        return (
            <FormattedHTMLMessage
                id='796df2b8-69c6-4c4b-8e8b-9db5f51034d3' // Some id that will never match.
                defaultMessage={marked(origMsg)}
                values={this.props.values}
            />
        );
    }
}

export default injectIntl(FormattedMarkdownMessage);