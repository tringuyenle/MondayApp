using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using MondayApp.Model;
using MondayApp.Services;

namespace MondayApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubTaskController : ControllerBase
    {
        private readonly SubTaskServices _subTaskService;
        private readonly TaskService _taskService;

        public SubTaskController (SubTaskServices subTaskService, TaskService taskService)
        {
            _subTaskService = subTaskService;
            _taskService = taskService;
        }

        [HttpGet("{parent_id:length(24)}")]
        public async Task<List<Tasks>> get(string parent_id) => await _subTaskService.get(parent_id);

        [HttpPost]
        public async Task<IActionResult> post(Tasks new_task)
        {
            await _subTaskService.create(new_task);

            return Ok("Thêm thành công");
        }

        //if flag is true, httpDelete one subtask, id -> id of subtask
        //else httpDelete all subtask have same parent task, id -> id of parent task
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> delete(string id, bool flag)
        {
            if(flag)
            {
                await _subTaskService.deleteOneSubTask(id);
            }
            else
            {
                var parent_task = await _taskService.get(id);
                if(parent_task == null) return NotFound("Không tìm thấy Parent Task");
                await _subTaskService.deleteManySubTask(id);    
            }
            return Ok("Xóa thành công");
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> update(string id, Tasks update_task)
        {
            update_task.id = id;
            await _subTaskService.update(id, update_task);

            return Ok("Chỉnh sửa thành công");
        }
    }
}
