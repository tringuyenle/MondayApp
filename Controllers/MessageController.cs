using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MondayApp.Model;
using MondayApp.Services;

namespace MondayApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly MessageService _messageService;
        public MessageController(MessageService messageService) { 
           _messageService = messageService; 
        }

        [HttpGet]
        public async Task<List<Message>> get() => await _messageService.get();

        [HttpPost]
        public async Task<IActionResult> create(Message new_mess)
        {
            await _messageService.create(new_mess);
            return Ok("Thêm thành công");
        }

        [HttpPut("{id:length(24)}")] 
        public async Task<IActionResult> update(string id, Message update_mess)
        {
            update_mess.id = id; 

            await _messageService.update(id, update_mess);
            return Ok("Chỉnh sửa thành công");
        }

        //if flag is true, httpDelete one message, id -> id of subtask
        //else httpDelete all message have same parent task, id -> id of parent task
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> delete(string id, bool flag)
        {
            if (flag)
            {
                await _messageService.deleteOne(id);
            }
            else
            {
                //var parent_task = await _messageService.get(id);
                //if (parent_task == null) return NotFound("Không tìm thấy Parent Task");
                await _messageService.deleteMany(id);
            }
            return Ok("Xóa thành công");
        }
    }
}
