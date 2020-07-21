<template>
	<div id="app">
		<TaskGrid id="task-grid" title="Coisas de casa" :tasks="tasks" />
		<TaskGrid id="task-grid" title="Antônio" :tasks="tasks" />
		<TaskGrid id="task-grid" title="Vitória" :tasks="tasks" />
		<TaskGrid id="task-grid" title="Vitória Junia" :tasks="tasks" />
	</div>
</template>

<script>
import TaskGrid from '@/components/TaskGrid'
import Dropzone from '@/components/Dropzone'
export default {
	components: {
		TaskGrid
	},
	data() {
		return {
			tasks: [
				{ name: 'Lavar roupas', pending: false, category: 'Coisas de casa'},
				{ name: 'Fazer comida', pending: true, category: 'Coisas de casa' },
				{ name: 'Passar roupa', pending: true, category: 'Coisas de casa' }
			],
			devTasks: []
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: center;
		align-items: top;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

	#task-grid {
		width: 100%;
	}
</style>
