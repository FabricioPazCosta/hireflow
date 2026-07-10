<script setup lang="ts">
import ResumeUploader from '@/components/upload/ResumeUploader.vue'
import { FileText } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

import { useResumeAnalysis } from '@/composables/useResumeAnalysis'

const router = useRouter()

const {

  jobDescription,
  canAnalyze,
  setResume
} = useResumeAnalysis()

function analyzeResume() {
  router.push('/result')
}

function handleFileSelected(file: File) {
  setResume(file)
}
</script>

<template>
  <main class="min-h-screen bg-slate-950 text-white">
    <section
      class="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center"
    >
      <span
        class="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400"
      >
        🚀 IA para acelerar sua contratação
      </span>

      <h1 class="mt-8 text-5xl font-bold leading-tight md:text-6xl">
        Analise seu currículo com
        <span class="text-blue-500">Inteligência Artificial</span>
      </h1>

      <p class="mt-6 max-w-2xl text-lg text-slate-400">
        Descubra se seu currículo é compatível com ATS, veja sua pontuação
        HireScore e receba sugestões para aumentar suas chances de conseguir a
        vaga.
      </p>

      <div
        class="mt-12 w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
      >
        <ResumeUploader @file-selected="handleFileSelected" />

       <textarea
  v-model="jobDescription"
  class="mt-8 h-40 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-blue-500"
  placeholder="Cole aqui a descrição da vaga..."
/>

        <button
  @click="analyzeResume"
  :disabled="!canAnalyze"
  :class="[
    'mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-lg font-semibold transition',
    canAnalyze
      ? 'bg-blue-600 hover:bg-blue-700'
      : 'cursor-not-allowed bg-slate-700 text-slate-400'
  ]"
>
  <FileText class="h-5 w-5" />
  Gerar HireScore
</button>
      </div>
    </section>
  </main>
</template>
