using EmployeeServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Net;

namespace EmployeeServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GmailController : ControllerBase
    {

        [HttpPost("sendEmail")]
        public IActionResult SendEmail([FromBody] EmailModel emailModel)
        {
            try
            {
                string smtpServer = "smtp.gmail.com";
                int port = 587;
                //string senderEmail = "chayale96@gmail.com";
                string senderEmail = "develop.ch.2026@gmail.com";
                //string senderPassword = "eshw qiqr kmcf seew";
                string senderPassword = "zlrm dihe vkoi hazn";
                string recipientEmail = emailModel.RecipientEmail;
                string subject = emailModel.Subject;
                string body = emailModel.Body;

                MailMessage message = new MailMessage(senderEmail, recipientEmail, subject, body);

                SmtpClient client = new SmtpClient(smtpServer, port);
                client.EnableSsl = true;
                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential(senderEmail, senderPassword);

                client.Send(message);

                return Ok("Email sent successfully!");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error sending email: {ex.Message}");
            }
        }
    }
}
