import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Drawer, Tabs, Tooltip, Typography } from 'antd'
import { RequestTime } from './request-time'
import { GlobalOutlined, SettingOutlined, SettingTwoTone, StopOutlined } from '@ant-design/icons'
import { FailureRate } from './failure-rate'
import { Reset } from './reset'
import { FailRule } from './fail-rule'
import { ReactQueryDevtoolsPanel } from 'react-query/devtools'
// import { ReactQueryDevtools } from 'react-query-devtools'
import {QueryClient, QueryClientProvider} from "react-query";

const { Text, Link } = Typography
const { TabPane } = Tabs

export const DevTool = () => {
  const [visible, setVisible] = useState(false)
  const queryClient = new QueryClient(); // for default configuration
  return (
    <div>
      {visible ? null : (
        <div
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            zIndex: 9999
          }}
        >
          <Tooltip title={'Click'}>
            <SettingTwoTone
              style={{ fontSize: '22px' }}
              onClick={() => setVisible(true)}
            />
          </Tooltip>
        </div>
      )}
      <Drawer
        open={visible}
        onClose={() => setVisible(false)}
        bodyStyle={{ padding: '10px' }}
        placement={'bottom'}
        key={'bottom'}
        height={'40%'}
      >
        <Text type="secondary">Dev Tools</Text>
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <SettingOutlined />
               Console
              </span>
            }
            key="1"
          >
            <div style={{ marginBottom: '0.5rem' }} className={'form-item'}>
              <Reset />
            </div>
            <div
              style={{ marginBottom: '0.3rem', display: 'flex', justifyContent: 'space-between', paddingTop: '20px', fontSize: '15px', fontWeight: '400'}}
            >
              <label>Request Shortest Time</label>
              <RequestTime />
            </div>
            <div
              className={'form-item'}
              style={{ marginBottom: '0.3rem', display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: '400'}}
            >
              <label>Request Failure Rate</label>
              <FailureRate />
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                <StopOutlined />
               Asynchronous request failure settings
              </span>
            }
            key="2"
          >
            <FailRule />
          </TabPane>
          <TabPane
            tab={
              <span>
                <GlobalOutlined />
                React Query
              </span>
            }
            key="3"
          >
            <QueryClientProvider client={queryClient}>
            <ReactQueryDevtoolsPanel />
            </QueryClientProvider>
            {/*<ReactQueryDevtools initialIsOpen={false}/>*/}
          </TabPane>
        </Tabs>

        {/*<RequestTime/>*/}
      </Drawer>
    </div>
  )
}

export const installDevTool = () => {
  const devToolsRoot = document.createElement('div')
  document.body.appendChild(devToolsRoot)
  ReactDOM.render(<DevTool />, devToolsRoot)
}
