<script setup lang="ts">
  import { VPTeamMembers } from 'vitepress/theme'
  import { integrations } from './integrations'
  import { teamMembers } from './contributors'
</script>

<template>
  <div class="content">
    <div class="content-container">
      <main class="main">

        <div class="vp-doc" style="display: flex; flex-direction: column; align-items: center; margin-top: 2.5rem">
          <h2 id="integrations" style="opacity: 0.7; font-weight: normal; padding-top: 2.5rem; padding-bottom: 0.5rem;">
            Integrations
          </h2>
          <div style="width: 100%; padding: 2.5rem;" class="integrations">
            <VPTeamMembers style="font-size: small;" :members="integrations" />
          </div>
          <h2 id="meet-the-team"
            style="opacity: 0.7; font-weight: normal; padding-top: 2.5rem; padding-bottom: 0.5rem;">
            Meet The Team
          </h2>
          <div style="width: 100%; padding: 2.5rem;">
            <VPTeamMembers style="font-size: medium;" :members="teamMembers" />
          </div>

        </div>
      </main>
    </div>
  </div>
</template>

<style>
  .integrations .avatar {
    --vp-shadow-3: none;
  }

  .integrations .avatar .avatar-img {
    border-radius: unset;
    object-fit: unset;
  }

  .not-available {
    opacity: 0.5;
    filter: grayscale(100%);
  }
</style>