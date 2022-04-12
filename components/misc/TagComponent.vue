<template>
  <card-style2-component card-title="Tag">
    <template #cardBody>
      <h5>Tags [Tag severity='success']</h5>
      <Tag class="mr-2" value="Primary" />
      <Tag class="mr-2" severity="success" value="Success" />
      <Tag class="mr-2" severity="info" value="Info" />
      <Tag class="mr-2" severity="warning" value="Warning" />
      <Tag severity="danger" value="Danger" />

      <h5>Pills [Tag rounded='true']</h5>
      <Tag class="mr-2" value="Primary" :rounded="true" />
      <Tag class="mr-2" severity="success" value="Success" :rounded="true" />
      <Tag class="mr-2" severity="info" value="Info" :rounded="true" />
      <Tag class="mr-2" severity="warning" value="Warning" :rounded="true" />
      <Tag severity="danger" value="Danger" :rounded="true" />

      <h5>Icons [Tag icon='pi pi-user']</h5>
      <Tag class="mr-2" icon="pi pi-user" value="Primary" />
      <Tag class="mr-2" icon="pi pi-check" severity="success" value="Success" />
      <Tag class="mr-2" icon="pi pi-info-circle" severity="info" value="Info" />
      <Tag class="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning" />
      <Tag icon="pi pi-times" severity="danger" value="Danger" />
    </template>
  </card-style2-component>
</template>
