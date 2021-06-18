import {
  ref, onMounted, onUnmounted, inject,
} from 'vue';

export default function useCounter(initialCount) {
  const count = ref(initialCount);
  const timeoutDuration = inject('timeoutDuration');
  let timeoutId;

  const updateCount = () => {
    count.value += 1;
  };

  const hurryUpUser = () => {
    const currentCount = count.value;
    clearInterval(timeoutId);
    timeoutId = setTimeout(() => {
      if (count.value === currentCount) {
        updateCount();
      }

      hurryUpUser();
    }, timeoutDuration || 2000);
  };

  onMounted(() => {
    hurryUpUser();
  });

  onUnmounted(() => {
    clearInterval(timeoutId);
  });

  return {
    count,
    updateCount,
  };
}
