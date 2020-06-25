import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as jquery from 'jquery';


interface MailChimpResponse {
	result: string;
	msg: string;
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
	form: any;
	formGroup: FormGroup;

	submitted = false;
	mailChimpEndpoint = 'https://parkspotly.us4.list-manage.com/subscribe/post-json?u=bf6aa2b97c3428a5a936d0b0d&amp;id=8b6ad48992&';
	error = '';


	constructor(fb: FormBuilder, private http: HttpClient) {
		this.formGroup = fb.group({
			title: fb.control('initial value', Validators.required)
		});
	}


	// reactive form components
	emailControl = new FormControl('', [
		Validators.required,
		Validators.email,
	]);
	// 	nameControl = new FormControl('', [
	// 		Validators.required
	//   ]);


	submit() {
		this.error = '';
		// && this.nameControl.status === 'VALID'
		if (this.emailControl.status === 'VALID') {



			const params = new HttpParams()
				.set('EMAIL', this.emailControl.value)



			const mailChimpUrl = this.mailChimpEndpoint + params.toString();

			// 'c' refers to the jsonp callback param key. This is specific to Mailchimp
			this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(response => {
				if (response.result && response.result !== 'error') {
					this.submitted = true;
					(<HTMLInputElement>document.getElementById("mc-embedded-subscribe")).value = response.result;
				}
				else {
					this.error = response.msg;
					(<HTMLInputElement>document.getElementById("mc-embedded-subscribe")).value = response.msg;
				}
			}, error => {
				console.error(error);
				this.error = 'Sorry, an error occurred.';
				(<HTMLInputElement>document.getElementById("mc-embedded-subscribe")).value = this.error;
			});
		} else {
			(<HTMLInputElement>document.getElementById("mc-embedded-subscribe")).value = "Please check your email";
		}
	}

	clickedShare() {
		alert("y");
	}


	subscribed() {

	}

	ngOnInit(): void {

		// const form = document.getElementById('form') as HTMLInputElement;
		// const formInput = document.querySelector('.subscribe__input')
		// const formBtn = document.querySelector('.subscribe__btn')
		// const subscribeImg = document.querySelector('.subscribe__image')

		// formInput.addEventListener('input', () => {

		//   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.name1.value)) {
		//     alert("yes")
		//   }
		//   alert("You have entered an invalid email address!")

		// regexp.test(formInput.value) ? formBtn.classList.add('btn--active') : formBtn.classList.remove('btn--active')
		// })


		// form.addEventListener('submit', e => {
		//   e.preventDefault()

		//   subscribeImg.classList.add('subscribe__image--success')
		//   formBtn.classList.add('btn--success')
		//   formBtn.value = "You're on the list! 👍"

		//   formInput.disabled = true
		//   formBtn.disabled = true
		//   alert(document.getElementById("this").value)

		// })

	}
}
