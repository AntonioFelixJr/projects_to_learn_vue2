<template>
  <div class="task" :class="stateClass" @click="changeState" draggable="true" 
    @dragstart="startDrag($event, task.name)">
    <span @click.stop="$emit('task-deleted', task)" class="close">x</span>
      {{ task.name }}
  </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    methods: {
        changeState() {
            this.task.pending = !this.task.pending 
        },
        startDrag(evt, item) {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemID', item)
        }
    },
    computed: {
        stateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    },
}
</script>

<style>
    .task {
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        margin: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div .task.done {
        color: #DDD;
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        text-decoration: line-through;
    }

    div .task.pending {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    div .task.pending .close {
        background-color: #B73229;
    }

    div .task.done .close {
        background-color: #0A8F08;
    }

    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        text-align: center;
    }

</style>