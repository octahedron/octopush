import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connectForm} from 'redux-formalize';
import Button from '../ui/form/Button';
import StackSelect from './StackSelect';
import BranchSelect from './BranchSelect';
import TargetsSelect from './TargetsSelect';
import Header from '../ui/Header';
import {formName} from './actions';

const DeployButton = styled(Button).attrs({type: 'submit', cta: true, large: true})`
  padding-top: 7px !important;
  padding-bottom: 7px !important;
  transform: translateY(-1px);
`;

const StackSelectWrapper = styled.div`
  width: 300px;
  margin-left: 20%;
`;

const DeployForm = styled.form`
  border-bottom: 1px solid var(--color-grey-10);
  padding: 20px 20px 30px 20%;
  margin-top: 1em;
  position: relative;

  &::before {
    position: absolute;
    color: var(--color-grey-30);
    text-transform: uppercase;
    font-size: 0.7em;
    content: 'Deploy:';
    top: 0;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  align-items: center;
`;

export function DeploySettings({state, fields, submitForm, updateBranch, updateTargets, stack, stacks, servers, branches, selectStack}) {
  const {branch, targets} = fields;
  return (
    <Header>
      <StackSelectWrapper>
        <StackSelect stacks={stacks} selected={stack} selectStack={selectStack}/>
      </StackSelectWrapper>
      {
        stack &&
        <DeployForm onSubmit={submitForm}>
          <FieldGroup>
            <BranchSelect branches={branches} selectBranch={updateBranch} selectedBranch={branch}/>
            to
            <TargetsSelect groups={stack.groups} servers={servers} selectTargets={updateTargets} selectedTargets={targets}/>
            <DeployButton isLoading={state.isSubmitting}>Deploy!</DeployButton>
          </FieldGroup>
        </DeployForm>
      }
    </Header>
  );
}

DeploySettings.propTypes = {
  fields: PropTypes.shape({
    branch: PropTypes.string,
    targets: PropTypes.array
  }).isRequired,
  submitForm: PropTypes.func.isRequired,
  updateField: PropTypes.func.isRequired,
  startDeploy: PropTypes.func.isRequired,
  selectStack: PropTypes.func.isRequired,
  updateBranch: PropTypes.func.isRequired,
  updateTargets: PropTypes.func.isRequired,
  branches: PropTypes.array,
  stack: PropTypes.object,
  stacks: PropTypes.object,
  servers: PropTypes.object,
  state: PropTypes.object
};

function onSubmit({fields, stack, startDeploy}) {
  const {branch, targets} = fields;
  if (branch && targets) startDeploy({stack, branch, targets});
}

const config = {
  initialState: {branch: undefined, targets: undefined},
  shouldResetFormOnProps: ({stack}, nextProps) => {
    if (nextProps.stack !== stack) return true;
    if (nextProps.state.isSubmitting) return false;
    return true;
  },
  handlers: {
    selectStack({loadDeploys}) {
      return ({value}) => loadDeploys(value);
    },
    updateBranch({updateForm}) {
      return ({value}) => {
        updateForm(state => ({...state, branch: value}));
      };
    },
    updateTargets({updateForm}) {
      return targets => {
        updateForm(state => ({...state, targets: targets.map(target => target.value)}));
      };
    }
  }
};

export default connectForm(formName, ['branch', 'targets'], onSubmit, config)(DeploySettings);
