import { Component, OnInit} from '@angular/core';
import { routerTransition } from '../../router.animations';
import { TopicService } from '../../shared/services/topic.service'
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'zero-config',
  templateUrl: './managetopic-form.component.html',
  styleUrls: ['./managetopic.component.scss'],
  animations: [routerTransition()]

})
export class ManagetopicFormComponent implements OnInit {
  value:any;
  id_topic:any;

  constructor(
    private service: TopicService,
    private route: ActivatedRoute,
    private router: Router,
   ){
    this.value = {  
    };

   }

   ngOnInit() {
    this.id_topic = this.route.snapshot.paramMap.get('id_topic');
    if (this.id_topic != null) {
      this.service.getTopicById(this.id_topic).subscribe(res => {
        console.log(res)
        this.value = res
      }, err => console.log(err))
    }
  }
  onSubmit(myform: NgForm) {
    console.log(myform.value)
    let params = myform.value;
    let status = '';
    // console.log('55555555555')
    // console.log(this.id_servicebox)
    if (this.id_topic == null) {
      status = 'create';
      // console.log('cre')
    } else {
      status = 'update';
      // console.log(myform.value)
      params['id'] = this.id_topic;
      // console.log('edi')
    }
    console.log(status)
    this.service.setTopic(params, status)
    .subscribe(res => {
      this.router.navigate(['managetopic']);
      console.log(res)
    }, err => console.log(err))
  }

}
