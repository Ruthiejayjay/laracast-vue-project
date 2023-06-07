<script setup>
defineProps({
    modelValue: String
});
let emit = defineEmits(['update:modelValue']);

function onTabPressed(e) {
  let t = e.target;

  // get correct position/selection
  let val = t.value,
    start = t.selectionStart,
    end = t.selectionEnd;

  // set textarea value to: text before caret + tab + text after coret
  t.value = val.substring(0, start) + "\t" + val.substring(end);

  // put coret at right position again
  t.selectionStart = t.selectionEnd = start + 1;

}

// function update(e) {
//     emit('update:modelValue', e.target.value);
// }
</script>

<template>
    <textarea 
        @keydown.tab.prevent="onTabPressed"
        @keyup="emit('update:modelValue', $event.target.value)" 
        v-text="modelValue"
    />
</template>