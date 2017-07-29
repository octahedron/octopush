import {connect} from 'react-redux';
import {actions} from './actions';
import DeploySettings from './DeploySettings';
import {getBranches, getFormState} from './selectors';
import {getCurrentStack, getStacks} from '../stacks/selectors';
import {getCurrentStackServers} from '../servers/selectors';

function mapStateToProps(state) {
  return {
    stack: getCurrentStack(state),
    branches: getBranches(state),
    stacks: getStacks(state),
    servers: getCurrentStackServers(state),
    formState: getFormState(state)
  };
}

const DeploySettingsContainer = connect(mapStateToProps, actions)(DeploySettings);

export default DeploySettingsContainer;
