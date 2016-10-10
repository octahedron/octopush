import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import autobind from 'autobind-decorator';
import {actions} from './actions';
import Servers from './Servers';
import {getServers, getServerEditing, getMeta} from './selectors';

function mapStateToProps(state) {
  return {
    servers: getServers(state),
    serverEditing: getServerEditing(state),
    meta: getMeta(state)
  };
}

@connect(mapStateToProps, {...actions})
class ServersContainer extends Component {

  static propTypes = {
    editServer: PropTypes.func.isRequired,
    updateServer: PropTypes.func.isRequired,
    addServer: PropTypes.func.isRequired,
    removeServer: PropTypes.func.isRequired,
    meta: PropTypes.object,
    servers: PropTypes.object,
    serverEditing: PropTypes.object,
    addingError: PropTypes.object
  }

  @autobind
  saveServer(hostname) {
    const {serverEditing, editServer, updateServer, addServer} = this.props;
    if (serverEditing) {
      if (hostname !== serverEditing.hostname) updateServer(serverEditing, hostname);
      else editServer(null);
    }
    else addServer(hostname);
  }

  render() {
    const {meta, serverEditing, servers, editServer, removeServer} = this.props;
    return (
      <Servers meta={meta} saveServer={this.saveServer} serverEditing={serverEditing} servers={servers} editServer={editServer} removeServer={removeServer}/>
    );
  }
}

export default ServersContainer;
