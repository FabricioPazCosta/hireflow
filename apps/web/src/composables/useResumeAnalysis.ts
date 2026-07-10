import { computed, ref } from 'vue'

export function useResumeAnalysis() {

  const selectedFile = ref<File | null>(null)

  const jobDescription = ref('')

  const canAnalyze = computed(() => {
    return (
      selectedFile.value !== null &&
      jobDescription.value.trim().length > 0
    )
  })

  function setResume(file: File) {
    selectedFile.value = file
  }

  return {
    selectedFile,
    jobDescription,
    canAnalyze,
    setResume
  }
}
