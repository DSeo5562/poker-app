package servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;

import beans.Users;
import dao.UsersDao;
import dao.UsersDaoImpl;

public class GetUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public GetUserServlet() {
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//HttpSession session = request.getSession(false);
		response.setContentType("application/json");
		
		//String uName = (String) session.getAttribute("username");
		
		String username = "aaaaa";
		int id = 1;
		
		UsersDao ud = new UsersDaoImpl();
		Users u = ud.getUserById(id);

		response.setContentType("application/json");
		ObjectMapper om = new ObjectMapper();
		String userInfo = om.writeValueAsString(u);

		response.getWriter().write(userInfo);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
