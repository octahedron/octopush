import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withHandlers from 'recompose/withHandlers';
import Group from '~/domain/stack/Group';
import ActionRow from '../ui/list/ActionRow';
import EditButton from '../ui/list/EditButton';
import RemoveButton from '../ui/list/RemoveButton';

const handlers = withHandlers({
  editGroup: props => () => {
    props.editGroup(props.group);
  },
  removeGroup: props => () => {
    props.removeGroup(props.group);
  }
});

const Name = styled.b`display: block;`;
const Hostnames = styled.span`font-size: 0.8em;`;

function GroupRow({group, servers, editGroup, removeGroup}) {
  const {name, isDeleting} = group;
  const actions = [
    <EditButton onClick={editGroup} middle/>,
    <RemoveButton onClick={removeGroup} middle>Remove group</RemoveButton>
  ];

  return (
    <ActionRow actions={actions} isLoading={isDeleting} isMultiline height={70}>
      <Name>{name}</Name>
      <Hostnames>{servers.map(server => server.hostname).join(', ')}</Hostnames>
    </ActionRow>
  );
}

GroupRow.propTypes = {
  group: Group.shape.isRequired,
  servers: PropTypes.array.isRequired,
  editGroup: PropTypes.func.isRequired,
  removeGroup: PropTypes.func.isRequired
};

export default handlers(GroupRow);
