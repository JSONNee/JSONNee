import { proxyActivities } from '@temporalio/workflow';
import type * as sendRequestsActivities from '../activities/sendRequests';

const { sendRequests } = proxyActivities<typeof sendRequestsActivities>({
  startToCloseTimeout: '1 minute',
  retry: {
    initialInterval: '5 seconds',
    backoffCoefficient: 2,
    maximumInterval: '1 minute',
  },
});

export async function sendRequestsWorkFlow(requests: any[], requestType: string): Promise<any> {
  return await sendRequests(requests, requestType)
}
