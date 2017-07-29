import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import {connect} from 'react-redux';
import {actions} from './actions';
import DeployList from './DeployList';
import {getDeploys, getDeployUsers, getPagination, getIsLoading} from './selectors';
import {getCurrentStack} from '../stacks/selectors';

function mapStateToProps(state) {
  return {
    currentStack: getCurrentStack(state),
    deploys: getDeploys(state),
    pagination: getPagination(state),
    users: getDeployUsers(state),
    isLoading: getIsLoading(state)
  };
}

@connect(mapStateToProps, actions)
class DeploysListContainer extends Component {

  static propTypes = {
    toggleDeployDetails: PropTypes.func.isRequired,
    loadDeploys: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    currentStack: PropTypes.object,
    deploys: PropTypes.array,
    pagination: PropTypes.object,
    users: PropTypes.object
  }

  @autobind
  loadDeploys({selected}) {
    const {currentStack: {slug}, loadDeploys} = this.props;
    console.log(slug, selected + 1);
    loadDeploys(slug, selected + 1);
  }

  @autobind
  toggleDeployDetails(deploy, e) {
    if (e.target.classList.contains('toggle-deploy-btn') || !deploy.isExpanded) {
      this.props.toggleDeployDetails(deploy);
    }
  }

  render() {
    const {isLoading, currentStack, deploys, pagination, users} = this.props;
    return (
      <DeployList isLoading={isLoading} stack={currentStack} pagination={pagination} loadDeploys={this.loadDeploys}
          toggleDeployDetails={this.toggleDeployDetails} deploys={deploys} users={users}/>
    );
  }
}

export default DeploysListContainer;
