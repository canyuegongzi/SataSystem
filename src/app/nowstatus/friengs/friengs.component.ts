import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friengs',
  templateUrl: './friengs.component.html',
  styleUrls: ['./friengs.component.css']
})
export class FriengsComponent implements OnInit {

  public data: any = [
    {
      label: '系统开发',
      children: [
        {
          label: '移动端',
          children: [
            {
              label: '安卓',
            },
            {
              label: 'IOS',
            },
            {
              label: 'ipad',
            }
           ]
        },
        {
          label: 'PC端',
          children: [
            {
              label: 'windows',
              checked: true,
              expanded: true,
            },
            {
              label: 'Mac',
              checked: true,
              expanded: true,
            },
            {
              label: 'Linux',
              checked: true,
              expanded: true,
            }
          ]
        },
      ]
    },
    {
      label: '云计算',
      children: [
        {
          label: 'IaaS',
          children: [
            {
              label: 'VMware',
            },
            {
              label: 'CloudSwitch',
            },
            {
              label: '微软',
            },
            {
              label: 'IBM',
            },
            {
              label: 'IBM',
            },
            {
              label: 'HP',
            },
            {
              label: 'Eucalyptus',
            },
            {
              label: 'Google Compute Engine（GCE）',
            },
            {
              label: 'Amazon EC2',
            }
          ]
        },
        {
          label: 'PaaS',
          children: [
            {
              label: 'HP',
            },
            {
              label: 'Eucalyptus',
            },
            {
              label: 'Google Compute Engine（GCE）',
            },
            {
              label: 'Amazon EC2',
            }
          ]
        },
        {
          label: 'SaaS',
          children: [
            {
              label: 'Salesforce'
            },
            {
              label: 'WebEx Communication'
            },
            {
              label: 'Digital Insight'
            },
            {
              label: 'Google'
            },
            {
              label: 'Microsoft'
            },
            {
              label: 'Oracle'
            }
          ]
        }
      ]
    },
    {
    label: '社区服务',
      children: [
        {
          label: ' itpub'
        },
        {
          label: 'UNIX论坛'
        },
        {
          label: '  HUIHOO论坛'
        },
        {
          label: 'StackOverFlowStack'
        },
        {
          label: 'ITEye'
        },
        {
          label: 'V2EX'
        }
      ]
  },
    {
      label: '其他'
    }];
  constructor() { }

  ngOnInit() {
  }

  public checkChange(event) {
    console.log(event);
  }
}
