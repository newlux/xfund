<?php
/**
 * CodeIgniter
 *
 * An open source application development framework for PHP 5.2.4 or newer
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the Academic Free License version 3.0
 *
 * This source file is subject to the Academic Free License (AFL 3.0) that is
 * bundled with this package in the files license_afl.txt / license_afl.rst.
 * It is also available through the world wide web at this URL:
 * http://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to obtain it
 * through the world wide web, please send an email to
 * licensing@ellislab.com so we can send you a copy immediately.
 *
 * @package		CodeIgniter
 * @author		EllisLab Dev Team
 * @copyright	Copyright (c) 2008 - 2014, EllisLab, Inc. (http://ellislab.com/)
 * @license		http://opensource.org/licenses/AFL-3.0 Academic Free License (AFL 3.0)
 * @link		http://codeigniter.com
 * @since		Version 1.0
 * @filesource
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class Fund extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('fund/common/header');
		$this->load->view('fund/biz/home');
		$this->load->view('fund/common/footer');
	}
	
	public function list_news()
	{
		$this->load->view('fund/common/header');
		$this->load->view('fund/biz/list_news');
		$this->load->view('fund/common/footer');
	}
	
	public function list_rank()
	{
		$this->load->view('fund/common/header');
		$this->load->view('fund/biz/list_rank');
		$this->load->view('fund/common/footer');
	}
	
	public function list_receipts()
	{
		$this->load->view('fund/common/header');
		$this->load->view('fund/biz/list_receipts');
		$this->load->view('fund/common/footer');
	}
	
	public function detail()
	{
		$this->load->view('fund/common/header');
		$this->load->view('fund/biz/detail');
		$this->load->view('fund/common/footer');
	}
	
	public function detail_news()
	{
		$this->load->view('fund/common/header');
		$this->load->view('fund/biz/detail_news');
		$this->load->view('fund/common/footer');
	}
	
	public function member_center()
	{
		$this->load->view('fund/common/header');
		$this->load->view('fund/biz/member_center');
		$this->load->view('fund/common/footer');
	}
	
	public function buy()
	{
		$this->load->view('fund/common/header');
		$this->load->view('fund/biz/buy');
		$this->load->view('fund/common/footer');
	}
	
	public function buy_confirm()
	{
		$this->load->view('fund/common/header');
		$this->load->view('fund/biz/buy_confirm');
		$this->load->view('fund/common/footer');
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/Welcome.php */