<script setup lang="ts">
import { useEventSource } from '@vueuse/core';
const { status, data, error } = useEventSource('/api/nyt/sse');
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>status: {{ status }}</p>
    <p>error: {{ error }}</p>
    <pre>
      <code>
        {{ data }}
      </code>
    </pre>
  </div>
</template>
