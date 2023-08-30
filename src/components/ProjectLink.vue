<script setup lang="ts">
import WelcomeItem from "./WelcomeItem.vue"
import DocumentationIcon from "./icons/IconDocumentation.vue"
import CommunityIcon from "./icons/IconCommunity.vue"
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>dbaues.docs</template>

    Various
    <a href="./docs/index.html" target="_blank" rel="noopener">documentation</a>
    I have created while a developer.
  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Wood Badge</template>

    As a part of my Wood Badge training, I created a site to be used as a template for recruitment that can be found
    <a href="./WoodBadge/index.html" target="_blank" rel="noopener">here</a>.
  </WelcomeItem>
</template>
