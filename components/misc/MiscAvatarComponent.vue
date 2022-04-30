<template>
  <BlockViewer header="Avatar" :code="code">
    <h5>Avatar Group</h5>
    <AvatarGroup class="mb-3">
      <Avatar image="images/avatar/amyelsner.png" size="large" shape="circle" />
      <Avatar image="images/avatar/asiyajavayant.png" size="large" shape="circle" />
      <Avatar image="images/avatar/onyamalimba.png" size="large" shape="circle" />
      <Avatar image="images/avatar/ionibowcher.png" size="large" shape="circle" />
      <Avatar image="images/avatar/xuxuefeng.png" size="large" shape="circle" />
      <Avatar label="+2" shape="circle" size="large" :style="{'background-color':'#9c27b0', 'color': '#ffffff'}" />
    </AvatarGroup>

    <h5>Label - Circle [Avatar shape='circle']</h5>
    <Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
    <Avatar label="V" class="mr-2" size="large" :style="{'background-color':'#2196F3', 'color': '#ffffff'}" shape="circle" />
    <Avatar label="U" class="mr-2" :style="{'background-color': '#9c27b0', 'color': '#ffffff'}" shape="circle" />

    <h5>Icon - Badge [Avatar v-badge='4']</h5>
    <Avatar v-badge="4" icon="pi pi-user" class="mr-2" size="xlarge" />
  </BlockViewer>
</template>

<script setup>
const code = `<h5>Avatar Group</h5>
<AvatarGroup class="mb-3">
  <Avatar image="images/avatar/amyelsner.png" size="large" shape="circle" />
  <Avatar image="images/avatar/asiyajavayant.png" size="large" shape="circle" />
  <Avatar image="images/avatar/onyamalimba.png" size="large" shape="circle" />
  <Avatar image="images/avatar/ionibowcher.png" size="large" shape="circle" />
  <Avatar image="images/avatar/xuxuefeng.png" size="large" shape="circle" />
  <Avatar label="+2" shape="circle" size="large" :style="{'background-color':'#9c27b0', 'color': '#ffffff'}" />
</AvatarGroup>

<h5>Label - Circle [Avatar shape='circle']</h5>
<Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
<Avatar label="V" class="mr-2" size="large" :style="{'background-color':'#2196F3', 'color': '#ffffff'}" shape="circle" />
<Avatar label="U" class="mr-2" :style="{'background-color': '#9c27b0', 'color': '#ffffff'}" shape="circle" />

<h5>Icon - Badge [Avatar v-badge='4']</h5>
<Avatar v-badge="4" icon="pi pi-user" class="mr-2" size="xlarge" />`
</script>
