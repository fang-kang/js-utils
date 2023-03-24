<script setup>
import DefaultTheme from 'vitepress/theme';
import Hero from './Hero.vue';
import Utterances from './Utterances.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <Hero />
    </template>

    <template #doc-after>
      <!-- <Utterances /> -->
    </template>
  </Layout>
</template>
