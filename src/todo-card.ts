import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('todo-card')
export class TodoCard extends LitElement {
  @property({ type: Number })
  todoId = 0

  @property({ type: String})
  title = this.todoId.toString()

  updated(changedProperties: { has: (arg: string) => any; }) {
    if (changedProperties.has('todoId')) {
      // `todoId` が変更された場合に `title` を更新
      this.title = this.todoId.toString();
    }
  }


  render() {
    return html`
      <div>
        ${this.title}
      </div>
    `
  }
}