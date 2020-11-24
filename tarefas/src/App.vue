<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TaskProgress :progress="progress" />
		<div id="inputTask">
			<NewTask @task-added="taskAdd" />
		</div>
		<div id=tasks>

			<TaskGrid @task-deleted="taskDelete" id="task-grid" title="Tarefas" :tasks="tasks" />
			<TaskGrid @task-deleted="taskDelete" id="task-grid" title="Fazendo" :tasks="tasks" />
			<TaskGrid @task-deleted="taskDelete" id="task-grid" title="Concluídas" :tasks="tasks" />
		</div>
		<!-- <TaskGrid id="task-grid" title="Vitória Junia" :tasks="tasks" /> -->
	</div>
</template>

<script>
import TaskGrid from '@/components/TaskGrid'
// import Dropzone from '@/components/Dropzone'
import NewTask from '@/components/NewTask'
import TaskProgress from '@/components/TaskProgress'

export default {
	components: {
		TaskGrid,
		NewTask,
		TaskProgress
	},
	created(){
		console.log(JSON.parse(localStorage.getItem('tasks')))
		this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
	},
	data() {
		return {
			tasks: [],
			devTasks: []
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		taskAdd(task) {
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0

			if (reallyNew) {
				this.tasks.push(
					{
						name: task.name,
						pending: task.pending || true,
						category: task.category || 'Tarefas'
					}
				)
			}
		},
		taskDelete(task) {
			const i = this.tasks.indexOf(task)
			if (i >= 0) this.tasks.splice(i, 1)
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length 
			const done = this.tasks.filter(task => !task.pending).length

			return Math.round(done / total * 100 || 0)
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
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* height: 100vh; */
		width: 100%;
	}

	#tasks {
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: space-between;
		align-items: top;
		height: 100vh;
	}

	#tasks > * {
		margin-left: 5px;
		margin-right: 5px;
	}

	#inputTask {
		align-self: center;		
	}

	#app h1 {
		margin-top: 5px;
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

	#task-grid {
		width: 100%;
	}
</style>
