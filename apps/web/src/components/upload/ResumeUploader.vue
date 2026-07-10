<script setup lang="ts">
import { ref } from 'vue'
import { Upload } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'file-selected', file: File): void
}>()

const selectedFile = ref<File | null>(null)

function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement

  const file = input.files?.item(0)

  if (!file) return

  selectedFile.value = file

  emit('file-selected', file)
}
</script>

<template>
  <label
    class="block cursor-pointer rounded-xl border-2 border-dashed border-slate-700 p-10 transition hover:border-blue-500"
  >
    <input
      type="file"
      accept=".pdf"
      class="hidden"
      @change="handleFileChange"
    />

    <div class="flex flex-col items-center">
      <Upload class="mb-5 h-12 w-12 text-blue-500" />

      <template v-if="selectedFile">
        <h3 class="text-lg font-semibold text-green-400">
          {{ selectedFile.name }}
        </h3>

        <p class="mt-2 text-slate-400">
          Currículo carregado com sucesso.
        </p>
      </template>

      <template v-else>
        <h3 class="text-xl font-semibold">
          Arraste seu currículo aqui
        </h3>

        <p class="mt-2 text-slate-400">
          ou clique para selecionar um arquivo PDF
        </p>
      </template>
    </div>
  </label>
</template>
