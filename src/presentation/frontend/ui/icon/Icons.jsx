import React from 'react';

function Icons() {
  return (
    <svg style={{display: 'none'}}>
      <defs>
        <symbol id="server-group" viewBox="0 0 48 48">
          <path d="M16.877 21.15l14.152-8.21M16.973 26.47l14.014 8.83m-.737 2.542c0 2.712 2.198 4.91 4.908 4.91 2.713 0 4.908-2.198 4.908-4.91 0-2.708-2.195-4.907-4.908-4.907-2.71 0-4.907 2.197-4.907 4.907zM7.937 23.845c0 2.71 2.197 4.907 4.907 4.907s4.908-2.197 4.908-4.907-2.197-4.908-4.907-4.908-4.907 2.198-4.907 4.908zM30.25 10.157c0 2.71 2.198 4.908 4.908 4.908 2.713 0 4.908-2.198 4.908-4.908S37.87 5.25 35.158 5.25c-2.71 0-4.907 2.197-4.907 4.907z" />
        </symbol>

        <symbol id="logout" viewBox="0 0 48 48">
          <path d="M12.918 24.055H42.75M33.045 34.1l9.705-10.045-9.705-10.046M12.918 41.5H5.25v-35h7.668" />
        </symbol>

        <symbol id="settings" viewBox="0 0 48 48">
          <path d="M21.625 5.49l-.4 3.826c-2.057.395-3.98 1.204-5.645 2.345l-2.96-2.375-3.27 3.24 2.374 2.96c-1.182 1.705-2.017 3.684-2.406 5.8l-3.824.402v4.596l3.824.432c.392 2.1 1.234 4.045 2.406 5.738l-2.375 2.93 3.27 3.27 2.96-2.376c1.665 1.145 3.553 1.98 5.613 2.376l.432 3.856h4.627l.4-3.828c2.127-.37 4.114-1.182 5.83-2.343l2.96 2.374 3.24-3.27-2.344-2.9c1.204-1.715 2.07-3.72 2.466-5.86l3.702-.4v-4.597l-3.702-.4c-.39-2.147-1.232-4.14-2.435-5.863l2.31-2.9-3.237-3.24-2.93 2.346c-1.722-1.17-3.726-2.003-5.86-2.376L26.25 5.49h-4.625zM24 17.893c3.37 0 6.107 2.748 6.107 6.108 0 3.362-2.736 6.078-6.107 6.078-3.373 0-6.107-2.716-6.107-6.078 0-3.36 2.734-6.108 6.107-6.108z" />
        </symbol>

        <symbol id="edit" viewBox="0 0 48 48">
          <path
            fill="none"
            d="M32.414,8.106l7.479,7.48L18.917,36.562l-10.81,3.332l3.33-10.811L32.414,8.106z M11.437,29.084l4.907,2.573 l2.573,4.905 M35.697,19.781l-7.479-7.478"
          />
        </symbol>

        <symbol id="stacks" viewBox="0 0 48 48">
          <g>
            <path d="M12.77 17.048H9V39h21.95v-3.766" />
            <path d="M17.05 9H39v21.95H17.05z" />
          </g>
        </symbol>

        <symbol id="loader" viewBox="0 0 48 48">
          <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </path>
        </symbol>
      </defs>
    </svg>
  );
}

export default Icons;
